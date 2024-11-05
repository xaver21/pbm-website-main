# Deployment Guide for PBM Website

## Prerequisites

1. A VPS or dedicated server running Linux (Ubuntu recommended)
2. Node.js 18+ installed
3. PM2 for process management
4. Nginx as reverse proxy
5. SSL certificate (Let's Encrypt recommended)
6. Stripe account with API keys

## Deployment Steps

1. Clone the repository to your server
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create production build:
   ```bash
   npm run build
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Stripe API keys
   - Update any other environment variables

5. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```

6. Start the application:
   ```bash
   pm2 start server/index.js --name pbm-website
   ```

7. Configure Nginx:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. Set up SSL with Let's Encrypt:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

9. Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Monitoring & Maintenance

- Monitor application: `pm2 monit`
- View logs: `pm2 logs pbm-website`
- Restart application: `pm2 restart pbm-website`

## Security Considerations

1. Keep Node.js and npm packages updated
2. Regularly update SSL certificates
3. Use strong firewall rules
4. Monitor server resources
5. Set up regular backups
6. Use environment variables for sensitive data
7. Implement rate limiting
8. Enable CORS appropriately

## Backup Strategy

1. Database backups (if applicable)
2. Regular file system backups
3. Environment configuration backups
4. SSL certificate backups

## Troubleshooting

1. Check application logs: `pm2 logs`
2. Check Nginx logs: `/var/log/nginx/`
3. Verify environment variables
4. Check SSL certificate status
5. Monitor server resources

For support, contact: info@joinpbm.com