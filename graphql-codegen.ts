import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://rickandmortyapi.com/graphql',
    documents: 'components/**/*.graphql',
    generates: {
        'src/graphql/schema.json': {
            plugins: [
                'introspection',
            ],
            config: {
                minify: true,
            },
        },
        'components/__generated__/graphqlBaseTypes.d.ts': {
            plugins: ['typescript'],
        },
        'components/': {
            preset: 'near-operation-file',
            presetConfig: {
                baseTypesPath: '__generated__/graphqlBaseTypes.d.ts',
                extension: '.ts',
                folder: '__generated__',
            },
            plugins: ['typescript-operations', 'typescript-react-apollo'],
            config: {
                namingConvention: 'keep',
                withHOC: false,
                withComponent: false,
                withHooks: true,
            },
        },
    },
};

export default config;
