# Security Documentation - Arab Student Union Website

## Overview
This document outlines the security measures implemented in the Arab Student Union website and provides guidance for secure deployment and operation.

## Security Features Implemented

### 1. CSRF Protection
**Status**: Not Applicable
**Reason**: The application uses JWT (JSON Web Tokens) for authentication, which are stateless and sent in HTTP headers rather than cookies. CSRF attacks typically target cookie-based authentication systems. Since JWT tokens are not automatically included in cross-origin requests, the application is not vulnerable to CSRF.

### 2. Transport Security (HTTPS)
**Deployment Requirements**:
- Always deploy behind HTTPS in production
- Use SSL/TLS certificates from trusted Certificate Authorities
- Redirect all HTTP traffic to HTTPS
- Implement HTTP Strict Transport Security (HSTS) headers

**Recommended HSTS Configuration**:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Secure Cookie Settings** (if cookies are used in future):
- Set `Secure` flag to ensure cookies are only sent over HTTPS
- Set `HttpOnly` flag to prevent JavaScript access
- Set `SameSite` attribute to `Strict` or `Lax`

### 3. Data Protection
**Encryption at Rest**: Not implemented
**Access Control**: Implemented via JWT authentication
- Admin actions require valid JWT tokens
- Database operations use prepared statements to prevent SQL injection
- Input validation and sanitization on all endpoints

**Note**: Data is protected through access controls rather than encryption at rest. If encryption at rest is required (e.g., for compliance), consider:
- Using SQLite with SQLCipher for encrypted databases
- Implementing file-level encryption for the database file
- Using encrypted storage solutions

### 4. Authentication & Authorization
- JWT-based authentication for admin functions
- Password hashing using bcryptjs
- Token expiration (default: 24 hours)
- Rate limiting on authentication endpoints

### 5. Input Validation & Sanitization
- All user inputs validated using express-validator
- SQL injection prevention via prepared statements
- XSS protection via Helmet's Content Security Policy
- File upload restrictions (10MB limit)

### 6. Logging & Auditing
**Admin Actions Logged**:
- Successful and failed login attempts (with IP addresses)
- Comment deletions (with user and timestamp)

**Log Format**:
```
[ISO_TIMESTAMP] ACTION_TYPE: Details - IP_ADDRESS
```

**Security Note**: Logs do not contain sensitive data like passwords or full request bodies.

### 7. Rate Limiting
- 100 requests per 15 minutes per IP address
- Applied to all `/api/` endpoints
- Helps prevent brute force attacks and DoS attempts

### 8. Security Headers (Helmet)
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Backup & Recovery

### Database Backup
Use the provided `backup.sh` script for regular database backups:

```bash
# Basic backup
./backup.sh

# Custom backup location
DB_PATH=database.sqlite BACKUP_DIR=./my_backups ./backup.sh

# Keep only last 5 backups
MAX_BACKUPS=5 ./backup.sh
```

### Recovery Steps
1. Stop the application server
2. Restore from backup: `cp backup_TIMESTAMP.sqlite database.sqlite`
3. Verify database integrity: `sqlite3 database.sqlite "PRAGMA integrity_check;"`
4. Restart the application server

## Health Monitoring
The `/api/health` endpoint provides basic health status:
- Returns `{"status": "OK", "timestamp": "ISO_DATE"}` when healthy
- Monitor this endpoint for uptime and basic functionality

## Known Limitations & Future Improvements

### Current Limitations
1. **No Multi-Factor Authentication (MFA)**: Admin authentication relies on username/password only
2. **No Account Lockout**: Failed login attempts are logged but don't trigger account lockouts
3. **No Audit Trail for Non-Admin Actions**: Only admin actions are logged
4. **No Encryption at Rest**: Database file is not encrypted
5. **No Automated Backups**: Backup script must be run manually or via cron
6. **No Intrusion Detection**: No monitoring for suspicious activity patterns
7. **No API Versioning**: No versioning strategy for API endpoints

### Future Security Enhancements
1. Implement MFA for admin accounts
2. Add account lockout after failed attempts
3. Implement comprehensive audit logging
4. Add database encryption (SQLCipher)
5. Set up automated backup schedules
6. Add security monitoring and alerting
7. Implement API versioning
8. Add security.txt file for vulnerability disclosure
9. Implement rate limiting per user account
10. Add security headers monitoring

## Security Incident Response
1. **Immediate Actions**:
   - Change all admin passwords
   - Revoke all active JWT tokens (by changing JWT_SECRET)
   - Review logs for suspicious activity

2. **Investigation**:
   - Analyze access logs for unauthorized access
   - Check database integrity
   - Review recent changes and deployments

3. **Recovery**:
   - Restore from clean backup if compromise suspected
   - Update all dependencies
   - Implement additional security measures

## Contact
For security-related concerns or vulnerability reports, contact the development team at: info@arabstudents-esenyurt.org

## Security Updates
- Regularly update all dependencies
- Monitor security advisories for used packages
- Test security updates in staging environment before production deployment
