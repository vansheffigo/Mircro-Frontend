module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // Matches .js or .mjs files
                exclude: /node_modules/, // Exclude files in node_modules directory
                use: {
                    loader: 'babel-loader', // Use babel-loader for processing
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], // Use React and Env presets
                        plugins: ['@babel/plugin-transform-runtime'] // Use Transform Runtime plugin
                    }
                }
            }
        ]
    }
};
