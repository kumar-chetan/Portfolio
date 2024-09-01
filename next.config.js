/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['icon.icepanel.io','e7.pngegg.com',"book.git-scm.com","freelogopng.com","firebase.google.com","seeklogo.com",'code.visualstudio.com','matplotlib.org','upload.wikimedia.org','res.cloudinary.com', 'firebasestorage.googleapis.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org']
  }
}

module.exports = nextConfig
