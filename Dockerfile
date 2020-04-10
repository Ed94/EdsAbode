#Using Apache
FROM httpd:latest

COPY ./apache.conf /usr/local/apache2/conf/httpd.conf
COPY ./ /var/www/edsdigitalabode.com/