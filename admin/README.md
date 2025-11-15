# Admin Panel - Leadbunker

Complete admin dashboard for managing all aspects of the Leadbunker platform.

## 📁 Admin Pages Created

### 1. **index.html** - Main Admin Dashboard
- Main entry point for the admin panel
- **NEW: Interactive Notification Bell System** 🔔
  - Real-time notification dropdown with badge counter
  - 3 priority levels: Urgent, Medium, Low
  - Filterable tabs: All, Urgent, Unread
  - Mark as read functionality (individual & bulk)
  - 8 notification types covering all admin activities
  - Direct links to relevant pages
  - Fully responsive design
- Overview of system health and key metrics
- Total users, monthly revenue, active extractions
- Recent users and transactions
- System alerts and notifications
- Quick action buttons

### 2. **users.html** - User Management
- Complete user database with search and filters
- **Delete users** with confirmation dialogs
- **Add credits** to user accounts with reason tracking
- **Login as user** functionality for support (logs admin session)
- Add new users manually
- View detailed user profiles with activity history
- Suspend/unsuspend user accounts
- Filter by plan type and status

### 3. **transactions.html** - Transaction Management
- View all transactions (completed, pending, failed, refunded)
- **Delete transactions** (with warnings)
- Approve/reject pending transactions
- Issue refunds for completed transactions
- Filter by type, status, payment method, and date range
- Export transaction data to CSV
- Detailed transaction viewer with payment breakdown

### 4. **coupons.html** - Coupon Management
- **Create new coupons** (percentage, fixed amount, free credits)
- Active/expired/disabled coupon views
- Usage tracking and limits
- Expiration date management
- Edit and disable coupons
- Visual coupon cards with real-time statistics

### 5. **support.html** - Support Ticket System
- **Detailed support ticket interface**
- Priority levels (urgent, high, medium, low)
- Category tags (technical, billing, feature request, account)
- Ticket conversation threads
- Reply to tickets with file attachments
- Mark tickets as resolved
- Assign tickets to team members
- Link to related pages (crypto payments, etc.)
- Ticket aging indicators

### 6. **scraping.html** - Email/Phone Scraping Management
- Monitor active scraping jobs in real-time
- **Progress tracking** with percentage completion
- **Resolve scraping issues** (failed jobs, timeout errors, bot protection)
- Stop/retry/refund failed jobs
- System health monitoring
- Worker pool status
- Success rate tracking
- Recent completed jobs history
- Detailed job information modals

### 7. **email-validator.html** - Email Validator Management
- **Validation service health monitoring** (Zerobounce, Hunter.io, Custom API)
- **Resolve validation issues** (API timeouts, rate limits, service errors)
- Retry failed validations
- Refund credits for failed validations
- Service configuration settings
- Response time and success rate tracking
- Recent validations history

### 8. **wallets.html** - Payment Wallet Management
- **Smart contract generated wallet tracking**
- Bitcoin, Ethereum, and USDT wallet support
- Wallet balance monitoring across all cryptocurrencies
- View wallet transaction history
- Copy wallet addresses
- View on blockchain explorers
- Smart contract information and status
- Generate new wallets
- Export wallet data

### 9. **crypto-payments.html** - Crypto Payment Resolution
- **HIGH PRIORITY**: Pending payment verification queue
- **Blockchain confirmation tracking**
- View transaction hashes and blockchain status
- **Approve and credit accounts** after verification
- **Reject payments** with reason tracking
- Automatic confirmation monitoring
- Recently resolved payments history
- Blockchain monitoring settings
- Auto-approval configuration
- Email notifications for pending payments

### 10. **analytics.html** - Analytics Dashboard
- Revenue tracking and trends
- User growth metrics
- Plan distribution charts
- Conversion rates
- System performance metrics
- Success rates and response times
- Quick stats summary table
- Customizable date ranges
- Export report functionality

### 11. **settings.html** - System Settings
- General company settings
- Email/SMTP configuration
- Payment gateway settings (Stripe, crypto)
- System limits and quotas
- Security settings (2FA, session timeout, login attempts)
- Maintenance mode control
- **Danger zone** (clear caches, reset database)

## 🔔 Notification System

**NEW: Comprehensive Admin Notification System**
- Interactive notification bell with animated badge
- 8 different notification types (crypto payments, support tickets, scraping jobs, etc.)
- Priority-based filtering (Urgent/Medium/Low)
- Smart tab system (All/Urgent/Unread)
- Mark as read functionality
- Real-time badge updates
- Responsive dropdown design
- Direct action links
- See `NOTIFICATION_SYSTEM.md` for detailed documentation

## 🎨 Design System Features

All admin pages follow the existing Leadbunker design system:
- ✅ Consistent color scheme (primary: #667eea, accent: #764ba2)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Mobile-first approach with hamburger menu
- ✅ Modern gradient cards and effects
- ✅ Smooth animations and transitions
- ✅ FontAwesome icons throughout
- ✅ Clean typography (Montserrat font)
- ✅ Consistent spacing and shadows
- ✅ Status badges (success, warning, danger, info)
- ✅ Modal dialogs for detailed views
- ✅ Table layouts with pagination
- ✅ Search and filter functionality

## 🔧 Key Admin Features

### User Management
- Delete users with double confirmation
- Add credits with optional reason/note
- Login as user (with admin session tracking)
- View complete user activity history
- Suspend/unsuspend accounts

### Transaction Control
- Delete any transaction
- Approve/reject pending payments
- Issue refunds
- View detailed payment information
- Export financial data

### Coupon System
- Create unlimited discount codes
- Percentage, fixed amount, or free credits
- Usage limits and expiration dates
- Real-time redemption tracking
- Enable/disable/delete coupons

### Support System
- Multi-level priority system
- Category tagging
- Conversation threads
- File attachments
- Team assignment
- Ticket status management

### Scraping Management
- Real-time job monitoring
- Progress tracking
- Error resolution
- Credit refunds for failures
- System health dashboard

### Email Validation
- Multiple service provider support
- Health monitoring
- Failed validation recovery
- Automatic retry system
- Credit refund automation

### Payment Wallets
- Smart contract integration
- Multi-cryptocurrency support
- Blockchain transaction tracking
- Wallet generation
- Balance monitoring

### Crypto Payments
- Urgent pending queue
- Blockchain verification
- Confirmation tracking
- Approve/reject workflow
- Automatic monitoring
- Transaction hash verification

## 📱 Mobile Responsive

All pages include:
- Mobile header with hamburger menu
- Collapsible sidebar
- Touch-friendly buttons and forms
- Responsive tables (horizontal scroll on mobile)
- Optimized layouts for small screens
- Mobile-specific styling and spacing

## 🔐 Security Features

- Admin session tracking
- Action logging
- Confirmation dialogs for destructive actions
- Password fields for sensitive data
- Session timeout settings
- Login attempt limiting

## 🚀 Future Enhancements (Production)

1. **Backend Integration**: Connect all forms and actions to API endpoints
2. **Real-time Updates**: WebSocket integration for live data updates
3. **Chart Libraries**: Integrate Chart.js or Recharts for visualizations
4. **File Upload**: Implement actual file upload for support attachments
5. **Blockchain API**: Connect to real blockchain APIs for payment verification
6. **Email Service**: Connect SMTP for notifications
7. **Database**: Connect to actual database for data persistence
8. **Authentication**: Implement secure admin authentication system
9. **Audit Logs**: Complete action logging system
10. **Backup System**: Automated backup and restore functionality

## 📝 Notes

- All pages are HTML-only (ready for backend integration)
- Follows existing Leadbunker design system
- Fully responsive and mobile-ready
- Uses existing CSS files (style.css, dashboard.css)
- JavaScript includes for mobile menu and basic interactions
- Modal dialogs for detailed views
- Demo alert() functions (to be replaced with actual API calls)

## 🎯 Admin Access

The admin panel is located in the `/admin/` directory and is separate from the main user dashboard. Access control should be implemented on the backend.

---

**Built with attention to detail, following the Leadbunker design system** 🎨

