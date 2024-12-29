### Planning & Design
- user register (authentication)
  - name, username, email, password (to be hashed)
- user login (authentication)
  - username & password
- user account page (protected route)
  - display name, username, email, and address
  - allow user to change password
  - allow user to enter an address for shipping
- user logout
- show products/home (nonprotected)
  - able to filter between tops, bottoms, shoes, and accessories
  - search products eventually
- cart (nonprotected)
  - remove items from cart
- purchase items in cart (nonprotected)
- admin profile only for me to use to add and remove products and users

### Tech Stack
- TypeScript
- React
- PostgreSql/Prisma
- Axios
- Bcrypt
