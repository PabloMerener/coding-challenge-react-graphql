import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import Card from './Card';
/* Error implementing Grid from @mui/material:
Failed to compile
./node_modules/@mui/styled-engine/index.js
Module not found: Can't resolve '@emotion/react' in '/home/pablo/projects/coding-challenge/santex-coding-challenge-react/node_modules/@mui/styled-engine'

Solution: https://mui.com/material-ui/guides/styled-engine/
❗ Warning: Using styled-components as an engine at this moment is not working when used in a SSR projects.
The reason is that the babel-plugin-styled-components is not picking up correctly the usages of the
styled() utility inside the @mui packages. For more details, take a look at this issue. We strongly
recommend using emotion for SSR projects.

If you are using yarn, you can configure it using a package resolution (package.json):
 {
   "dependencies": {
-    "@mui/styled-engine": "latest"
+    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
   },
+  "resolutions": {
+    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
+  },
 }
*/
import { Grid } from '@mui/material';

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {data.products.items.map(
        (e: {
          id: number;
          name: string;
          description: string;
          featuredAsset: {
            source: string;
          };
          variants: {
            id: number;
            name: string;
            price: number;
          }[];
        }) =>
          <Grid item xs={2} sm={4} md={4} key={e.id}>
            <Card
              id={0}
              name={e.name}
              description={e.description}
              source={e.featuredAsset?.source}
              variants={e.variants}
            />
          </Grid>
      )}
    </Grid>
  );
}
