# An Image Gallery app made in Next.js using TypeScript, Bootstrap and React
### Link of tutorial
```
https://youtu.be/fqfer6xMp2A?si=8WXXzM07WIha8N9i
```

### Prerequisites
1. Official Documentation for Next.js
```
https://nextjs.org/docs
```
React-Bootstrap
```
https://react-bootstrap.netlify.app/docs/getting-started/introduction
```
2. To initialize a Next.js project, run this command on the command line and folder for the project
```
npx create-next-app@latest
```
3. Select yes to everything except for using Tailwind CSS and using default alias for this code

4. For Bootstrap Dependencies, run this command to install the packages
```
npm i bootstrap react-bootstrap
```
5. To run the project, type this command
```
npm run dev
```

### Project Specifications
1. This project uses Unsplash's free image API's. You need to create an account to replicate this project. The link is
```
https://unsplash.com/developers
```
2. Once you create an account, make sure to create a .env.local file to store your access keys, since they are confidential.
3. For more information, here is the link for Unsplash's Documentation.
```
https://unsplash.com/documentation
```
4. To allow image resizing for NextJS, configure the next.config.mjs file to include the domains of websites. Here is a sample
```
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "plus.images.com"]
    }
};
```
5. For static loading, use Ctrl + Down key + F5 to hard refresh for different images
6. For social media previews, if the file name is named to this
```
opengraph-image
```
NextJS will automatically set it as the social media preview.
Same gist for fav icons named
```
favicon.ico
```
NextJS will automatically set it as the faf icon, the icon in the browser tab.
Both should be inside the /app folder

### Deploying to Vercel
1. Create a Vercel Account using your GitHub Account.
2. Navigate to Overview and Select the Add button.
3. Select the repository you want to add.
4. Be sure to add the UNSPLASH_ACCESS_KEY along with its value. Vercel automatically encrypts this.
