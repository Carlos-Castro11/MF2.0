echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* carlos@191.252.186.61:/var/www/marquesefinelli.com.br/

echo "Done!"