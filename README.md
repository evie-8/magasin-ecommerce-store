md
# Magasin E-commerce Store

E-commerce website built with Next.js, React, and TypeScript.

## Key Features & Benefits

*   **Modern UI:** Built with Next.js and React for a fast and responsive user experience.
*   **Tailwind CSS:** Utilizes Tailwind CSS for easy and customizable styling.
*   **Product Catalog:** Displays products with categories, colors, and sizes.
*   **Cart Functionality:** Allows users to add and manage items in their cart.
*   **Data Fetching:** Uses `get-billboard`, `get-categories`, `get-products` and other actions to retrieve data.
*   **Category Browsing:** Allows users to browse products by category.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:** Version 18 or higher
*   **npm** or **yarn** or **pnpm** or **bun:** Package managers for installing dependencies.

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/evie-8/magasin-ecommerce-store.git
    cd magasin-ecommerce-store
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

    Using pnpm:

    ```bash
    pnpm install
    ```

    Using bun:

    ```bash
    bun install
    ```

3.  **Run the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Using yarn:

    ```bash
    yarn dev
    ```

    Using pnpm:

    ```bash
    pnpm dev
    ```

     Using bun:

    ```bash
    bun dev
    ```

4.  **Open in browser:**

    Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage Examples & API Documentation

### Data Fetching

The project uses several custom hooks and functions for data fetching:

*   `get-billboard.tsx`: Fetches a single billboard.
*   `get-billboards.tsx`: Fetches all billboards.
*   `get-categories.tsx`: Fetches all categories.
*   `get-category.tsx`: Fetches a specific category.
*   `get-colors.tsx`: Fetches all colors.
*   `get-product.tsx`: Fetches a single product.
*   `get-products.tsx`: Fetches all products.
*   `get-sizes.tsx`: Fetches all sizes.

Example usage within a component:

```tsx
import { getProducts } from './actions/get-products';

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
```

### Tailwind CSS

Tailwind CSS is used extensively for styling.  Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs) for details on available classes and customization.

Example usage:

```tsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add to Cart
</button>
```

## Configuration Options

The following configurations can be adjusted:

*   **Images:** The `next.config.js` file specifies the allowed remote image patterns:

    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            pathname: "**",
          },
        ],
      },
    };

    module.exports = nextConfig;
    ```
    Update the `remotePatterns` array to include any other image hostnames you plan to use.

## Contributing Guidelines

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Submit a pull request with a clear description of your changes.

## License Information

License is not specified.  All rights are reserved to the owner, evie-8.

## Acknowledgments

*   [Next.js](https://nextjs.org/)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Headless UI](https://headlessui.com/)
*   [Radix UI](https://www.radix-ui.com/)
