const projects = [
  {
    title: 'HookFlow',
    tags: ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'Alembic', 'HMAC', 'Background Worker'],
    description:
      'A durable webhook delivery service. It verifies signed incoming events, routes them to subscribed destinations, persists delivery jobs, and retries failed deliveries with backoff and worker leases.',
    link: 'https://github.com/Manime016/hookflow',
  },
  {
    title: 'BookNow',
    tags: ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'Alembic', 'JWT', 'Razorpay', 'Docker'],
    description:
      'Event ticket booking platform built around seat inventory, temporary seat locks, booking state transitions and verified payments. Includes a React client, database migrations and automated tests.',
    link: 'https://github.com/Manime016/BookNow',
    demo: 'https://book-now-sandy.vercel.app',
  },
  {
    title: 'Postgram',
    tags: ['Python', 'FastAPI', 'MySQL', 'ImageKit', 'Streamlit', 'JWT'],
    description:
      'Photo and video sharing application with user accounts, media uploads, feeds, likes, comments and one-to-one messaging, backed by a Python API and MySQL.',
    link: 'https://github.com/Manime016/postgram',
  },
  {
    title: 'E-Commerce Backend',
    tags: ['Python', 'FastAPI', 'MongoDB', 'Motor', 'Pydantic', 'JWT', 'Razorpay', 'Docker'],
    description:
      'E-commerce API covering authentication, product management, carts, orders and coupons. Includes stock reservation and release during order workflows and Razorpay signature verification.',
    link: 'https://github.com/Manime016/ecomm',
    demo: 'https://ecomm-seven-indol.vercel.app',
  },
  {
    title: 'ZazMusic',
    tags: ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'JavaScript', 'REST API'],
    description:
      'Music application with a Python API for song search and uploads, user accounts, liked songs and playlist management, with a browser-based frontend.',
    link: 'https://github.com/Manime016/zazMusic',
  },
  {
    title: 'Net Suraksha Hub',
    tags: ['React', 'JavaScript', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    description:
      'Full-stack learning portal with course management, assessments, complaint workflows and certificate generation, supported by a React frontend and Express API.',
    link: 'https://github.com/Manime016/Net_Suraksha_Hub',
  },
  {
    title: 'GitHub Daily Log',
    tags: ['Python', 'GitHub Actions', 'JSON', 'Unit Testing', 'Automation'],
    description:
      'Scheduled Python automation that runs tests, generates a daily activity record and commits updated JSON data through a GitHub Actions workflow.',
    link: 'https://github.com/Manime016/github-daily-log',
  },
  {
    title: 'AssetHub',
    tags: ['Python', 'Flask', 'MySQL', 'Jinja2', 'Blueprints'],
    description:
      'Modular asset management application for employees, company assets and assignment/return workflows, with authentication, admin tools, search and filtering.',
    link: 'https://github.com/Manime016/AssetHub',
  },
]

export default projects
