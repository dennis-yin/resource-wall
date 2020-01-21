
## Git Smart

Git Smart is a website where users can link articles based on their category, look for articles posted by others and add them to their boards.

## Final Product

!["Home"](https://github.com/dennis-yin/resource-wall/blob/master/screenshots/01.png?raw=true )
!["Screenshot of users URLs page"](https://github.com/dennis-yin/resource-wall/blob/master/screenshots/02.png?raw=true )

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
