
🚀 Project Setup Instructions
To run the project on your PC, follow these steps: 

# 1. Install Node.js dependencies
npm install

# 2. Install PHP dependencies
composer install

# 3. Install Inertia.js for Laravel
composer require inertiajs/inertia-laravel

# 4. Install Inertia.js packages for React
npm install @inertiajs/inertia @inertiajs/inertia-react


# 5. Configure .env file
Open the .env file and update your database settings:

DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

# 6. Configure vite.config.js
Update your vite.config.js with your local development domain:

export default defineConfig({
  server: {
    host: 'your-local-domain.test',
  },
  // other Vite settings
});


# 7. database is upload with this project's root name innovationlabdb , so import it to your database 


Run the development servers

npm run dev
php artisan serve                                #for local pc
php artisan serve --host=0.0.0.0 --port=8000     #for wifi 


# After meessage redeircet 
# when  blog pagintation then navbar is not selected
# admin panel skill set color wrong 
