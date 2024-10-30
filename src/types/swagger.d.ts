declare module 'swagger-ui-dist' {
  export interface SwaggerUIOptions {
    url?: string
    urls?: Array<{ url: string; name: string }>
    dom_id?: string
    domNode?: HTMLElement
    spec?: any
    validatorUrl?: string | null
    presets?: Array<any>
    plugins?: Array<any>
    layout?: string
    deepLinking?: boolean
    [key: string]: any
  }

  const SwaggerUI: {
    (options: SwaggerUIOptions): void
    presets: {
      apis: any
    }
  }

  export default SwaggerUI
}
