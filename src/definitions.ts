declare module '@capacitor/core' {
  interface PluginRegistry {
    TrueCaller OneTap: TrueCaller OneTapPlugin;
  }
}

export interface TrueCaller OneTapPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
