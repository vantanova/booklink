FROM ruby:3.0.2
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /speedylink-api
WORKDIR /speedylink-api

COPY Gemfile /speedylink-api/Gemfile
COPY Gemfile.lock /speedylink-api/Gemfile.lock

RUN gem install bundler
RUN bundle install
COPY . /speedylink-api

EXPOSE 5000

CMD rails s -p 5000 -b '0.0.0.0'
