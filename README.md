


<h3 align="center">
You can visit this Demo at : <a href="https://phonebook.zulzayn.com" target="_blank">phonebook.zulzayn.com</a>
</h3> 

## REQUIREMENT

During my development, i use Laravel 9 and below are the version to run the assessment
- PHP 8.1.4
- Composer 2.3.2

## INSTALLATION STEPS

### To Run Web System

**1) Clone**
- SSH : `git clone git@gitlab.com:zulzayn/laravel-phonebook.git`
- HTTPS : `git clone https://gitlab.com/zulzayn/laravel-phonebook.git`

**2) run - `composer install`**

**3) Copy .env.example file and rename to .env** 

_For database:-_
- change `DB_DATABASE=dev_phonebook`
- change database credential accordingly to your MySQL username and password

**5) run - `php artisan key:generate`**

**6) Create database - dev_phonebook**

**7) run - `php artisan migrate`**

**8) You`re Good to go! Run the system in any PHP Webserver (nginx/apache)**


