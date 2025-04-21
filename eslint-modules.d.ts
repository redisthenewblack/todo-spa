declare module '@eslint/eslintrc' {
  export class FlatCompat {
    constructor(options: { baseDirectory: string })
    extends(...configs: string[]): Array<Record<string, unknown>>
  }
}

declare module '@eslint/js' {
  const configs: {
    recommended: Record<string, unknown>
  }
  export default { configs }
}
