export const RegistryLoader = {
  load: (source) => {
    const registry = source.read();
    if (!registry.modules || !registry.workflows)
      throw new Error("Invalid registry");
    return registry;
  }
};
