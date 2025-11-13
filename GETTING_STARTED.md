# Getting Started with Leadbunker

## 🎉 Congratulations!

Your **Leadbunker** frontend is now complete! Here's everything you need to know to view and start working on the project.

---

## 📁 What's Been Created

### Complete HTML Pages (15 pages)
1. **index.html** - Landing page with hero, features, testimonials
2. **features.html** - Detailed feature showcase
3. **pricing.html** - Credit-based pricing with crypto payment info
4. **about.html** - Company information and mission
5. **contact.html** - Contact form and information
6. **login.html** - User login page
7. **signup.html** - User registration with free trial
8. **dashboard.html** - User dashboard mockup
9. **how-it-works.html** - Process explanation
10. **compliance.html** - Compliance overview
11. **privacy.html** - Privacy policy
12. **terms.html** - Terms of service
13. **gdpr.html** - GDPR compliance details
14. **disclaimer.html** - Legal disclaimer

### Styling & Scripts
- **css/style.css** - Complete design system with modern UI
- **js/main.js** - JavaScript utilities and helpers

### Documentation
- **README.md** - Full project documentation
- **GETTING_STARTED.md** - This file

---

## 🚀 How to View Your Website

### Option 1: Direct File Opening
1. Navigate to: `/Users/mac/Desktop/Email Market/`
2. Double-click `index.html`
3. Your default browser will open the site

### Option 2: Local Web Server (Recommended)
```bash
# Navigate to the project
cd "/Users/mac/Desktop/Email Market"

# Start Python HTTP server
python3 -m http.server 8000

# Or if you have Node.js
npx http-server -p 8000

# Then open browser to:
# http://localhost:8000
```

---

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Indigo (#4F46E5) - Used for buttons and accents
- **Secondary**: Cyan (#06B6D4) - Used for highlights
- **Accent**: Purple (#8B5CF6) - Used in gradients
- **Success**: Green (#10B981) - Validation states
- **Warning**: Amber (#F59E0B) - Important notices

### Key Features
✅ Fully responsive design  
✅ Modern gradient backgrounds  
✅ Smooth animations and transitions  
✅ Professional card-based layouts  
✅ GDPR compliance emphasized throughout  
✅ AI-powered features highlighted  
✅ Crypto payment system explained  
✅ Credit-based pricing clearly displayed  

---

## 📋 Key Pages Overview

### Landing Page (index.html)
- Hero section with dashboard preview
- AI-powered features showcase
- How it works (3 steps)
- Testimonials
- Compliance badges
- Clear call-to-actions

### Pricing Page (pricing.html)
- 4 pricing tiers (Free, Standard, Pro, Enterprise)
- Credit consumption breakdown
- Crypto payment options
- FAQ section

### Dashboard (dashboard.html)
- Mockup of user interface
- Stats display
- New extraction form
- Recent tasks table
- Credit balance display

### Legal Pages
- Comprehensive privacy policy
- Detailed terms of service
- GDPR compliance statement
- Important disclaimers

---

## ⚡ Next Steps: Backend Development

Now that the frontend is complete, you need to build the Python backend. Here's your roadmap:

### 1. Set Up Python Environment
```bash
cd "/Users/mac/Desktop/Email Market"
mkdir backend
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Required Packages
Create `requirements.txt`:
```txt
flask==3.0.0
flask-cors==4.0.0
flask-sqlalchemy==3.1.1
beautifulsoup4==4.12.3
selenium==4.16.0
requests==2.31.0
scrapy==2.11.0
validators==0.22.0
python-dotenv==1.0.0
celery==5.3.4
redis==5.0.1
psycopg2-binary==2.9.9
pyjwt==2.8.0
bcrypt==4.1.2
```

Install:
```bash
pip install -r requirements.txt
```

### 3. Backend Architecture

Create this structure:
```
backend/
├── app.py                 # Flask/FastAPI main app
├── config.py              # Configuration
├── requirements.txt       # Dependencies
├── .env                   # Environment variables
├── models/
│   ├── __init__.py
│   ├── user.py            # User model
│   ├── task.py            # Extraction task
│   └── credit.py          # Credit system
├── scraper/
│   ├── __init__.py
│   ├── crawler.py         # Website crawler
│   ├── extractor.py       # Contact extraction
│   ├── validator.py       # Email validation
│   └── exporter.py        # Data export (CSV, Excel)
├── api/
│   ├── __init__.py
│   ├── auth.py            # Login/signup
│   ├── extraction.py      # Extraction endpoints
│   ├── payment.py         # Crypto payments
│   └── user.py            # User management
└── utils/
    ├── __init__.py
    ├── ai_validator.py    # AI email validation
    ├── crypto_gateway.py  # Crypto integration
    └── helpers.py         # Utility functions
```

### 4. Key Backend Features to Implement

#### A. User Authentication
- JWT-based authentication
- Password hashing with bcrypt
- Email verification
- Password reset

#### B. Credit System
- Track credit balance
- Deduct credits per operation
- Crypto payment integration
- Transaction history

#### C. Web Scraping Engine
- BeautifulSoup for static sites
- Selenium for JavaScript sites
- Scrapy for large-scale scraping
- Respect robots.txt
- Rate limiting

#### D. AI Email Validator
- Syntax validation
- Domain MX record check
- Disposable email detection
- Fake email pattern recognition
- Quality scoring

#### E. Data Export
- Generate CSV files
- Create Excel (XLSX) files
- JSON format support
- Separate files for:
  - Valid emails
  - Invalid emails
  - Phone numbers
  - Social profiles

#### F. Crypto Payment Integration
Options:
- **CoinPayments API** (supports multiple cryptos)
- **BTCPay Server** (self-hosted)
- **NOWPayments** (easy integration)
- **Custom blockchain listeners** (advanced)

---

## 🔧 Configuration Files to Create

### .env (Environment Variables)
```env
# Flask Configuration
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key-here

# Database
DATABASE_URL=postgresql://user:password@localhost/leadbunker

# Redis (for Celery)
REDIS_URL=redis://localhost:6379/0

# Crypto Payment (example: CoinPayments)
COINPAYMENTS_PUBLIC_KEY=your-public-key
COINPAYMENTS_PRIVATE_KEY=your-private-key
COINPAYMENTS_IPN_SECRET=your-ipn-secret

# Email Service (for notifications)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-password

# API Keys (if needed)
OPENAI_API_KEY=sk-...  # For AI features
```

### config.py
```python
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Credit Prices
    CREDITS_FREE_TRIAL = 100
    CREDIT_COST_DOMAIN = 1
    CREDIT_COST_EMAIL_VERIFY = 0.1
    CREDIT_COST_PHONE_VERIFY = 0.2
    CREDIT_COST_SOCIAL = 0.5
    
    # Rate Limits
    RATE_LIMIT_REQUESTS_PER_MINUTE = 60
    MAX_BULK_URLS = 10000
    
    # Data Retention
    DATA_RETENTION_DAYS = 30
```

---

## 🎯 Implementation Priority

### Week 1: Core Backend
1. Set up Flask/FastAPI app
2. Database models (User, Task, Credit)
3. Authentication (JWT)
4. Basic API endpoints

### Week 2: Scraping Engine
1. Website crawler
2. Email extraction
3. Phone number extraction
4. Social profile detection

### Week 3: AI Validation
1. Email syntax validator
2. Domain MX checker
3. Fake email detector
4. Quality scoring system

### Week 4: Payment & Export
1. Crypto payment integration
2. Credit management
3. Data export (CSV, Excel)
4. File download endpoints

### Week 5: Testing & Integration
1. Connect frontend to backend
2. Testing all features
3. Bug fixes
4. Performance optimization

---

## 🐛 Debugging Tips

### Common Issues

**1. CORS Errors**
```python
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
```

**2. File Paths**
- Use absolute paths for file operations
- Ensure upload directories exist
- Set proper file permissions

**3. Database Connection**
```bash
# Start PostgreSQL
brew services start postgresql  # macOS
sudo service postgresql start    # Linux

# Create database
createdb leadbunker
```

**4. Redis for Celery**
```bash
# Install and start Redis
brew install redis  # macOS
brew services start redis

# Or use Docker
docker run -d -p 6379:6379 redis
```

---

## 📊 Database Schema (Suggested)

### Users Table
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    credits INTEGER DEFAULT 100,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);
```

### Tasks Table
```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    url VARCHAR(500) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    emails_found INTEGER DEFAULT 0,
    phones_found INTEGER DEFAULT 0,
    credits_used INTEGER DEFAULT 0,
    result_file_path VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    amount DECIMAL(10, 2),
    currency VARCHAR(10),
    credits_added INTEGER,
    payment_status VARCHAR(50),
    crypto_address VARCHAR(255),
    transaction_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🎓 Learning Resources

### Python Web Scraping
- **BeautifulSoup**: https://www.crummy.com/software/BeautifulSoup/
- **Selenium**: https://selenium-python.readthedocs.io/
- **Scrapy**: https://docs.scrapy.org/

### Flask/FastAPI
- **Flask**: https://flask.palletsprojects.com/
- **FastAPI**: https://fastapi.tiangolo.com/

### Crypto Payments
- **CoinPayments**: https://www.coinpayments.net/merchant-tools-api
- **BTCPay**: https://docs.btcpayserver.org/

### Email Validation
- **validators**: https://validators.readthedocs.io/
- **email-validator**: https://pypi.org/project/email-validator/

---

## 📞 Need Help?

If you encounter issues:

1. **Check the README.md** for detailed documentation
2. **Review code comments** in HTML/CSS/JS files
3. **Test individual components** before integrating
4. **Use browser DevTools** for frontend debugging
5. **Check Python logs** for backend issues

---

## ✅ Checklist Before Launch

### Frontend
- [x] All pages created and styled
- [x] Responsive design tested
- [x] Forms have validation
- [x] Legal pages complete
- [x] Navigation works
- [x] All links functional

### Backend (To Do)
- [ ] Database set up
- [ ] API endpoints working
- [ ] Authentication functional
- [ ] Scraping engine tested
- [ ] Email validation accurate
- [ ] Crypto payments integrated
- [ ] File exports working
- [ ] Rate limiting implemented

### Security
- [ ] HTTPS enabled
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] CSRF tokens
- [ ] Password hashing
- [ ] API authentication
- [ ] Rate limiting
- [ ] Input sanitization

### Compliance
- [ ] GDPR tools implemented
- [ ] Privacy policy accessible
- [ ] Cookie consent banner
- [ ] Data deletion features
- [ ] Export user data option
- [ ] Audit logging

---

## 🚀 You're Ready!

Your Leadbunker frontend is **production-ready**. Now focus on building the Python backend to bring this powerful lead generation platform to life!

**Happy Coding! 🎉**

---

*Last Updated: January 2025*

