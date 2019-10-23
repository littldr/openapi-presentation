import { OpenAPIV3 } from "openapi-types";

export interface IExampleConfiguartion {
    includeReadOnly?: boolean;
    includeWriteOnly?: boolean;
}

const example = (
    mediaOrSchema: OpenAPIV3.SchemaObject | OpenAPIV3.MediaTypeObject,
    config: IExampleConfiguartion = {},
): any => {
    if (mediaOrSchema.example !== undefined) {
        return mediaOrSchema.example;
    }

    if ((mediaOrSchema as OpenAPIV3.MediaTypeObject).schema) {
        return exampleForSchema(
            (mediaOrSchema as OpenAPIV3.MediaTypeObject).schema as OpenAPIV3.SchemaObject,
            config,
        );
    }
    return exampleForSchema(
        mediaOrSchema as OpenAPIV3.SchemaObject,
        config,
    );

};

const exampleForSchema = (
    schema: OpenAPIV3.SchemaObject,
    config: IExampleConfiguartion = {},
): any => {
    const { type, example } = schema;

    if (example !== undefined) {
        return example;
    } else if (schema.default) {
        return schema.default;
    } else if (schema.enum) {
        return schema.enum[0];
    }

    switch (type) {
        case "object":
            return exampleForObject(schema, config);
        case "array":
            return exampleForArray(schema, config);
        case "string":
            return exampleForString(schema, config);
        case "number":
            return exampleForNumber(schema, config);
        case "integer":
            return 0;
        case "boolean":
            return true;
        default:
            throw new Error(`Unknown Type: ${schema.type}`);
    }
};

const exampleForNumber = (
    { format }: any,
    _config: IExampleConfiguartion = {},
): any => {
    switch (format) {
        case "float": return 0.0;
        default: return 0;
    }
};

const exampleForString = (
    { format }: any,
    _config: IExampleConfiguartion = {},
): any => {
    switch (format) {
        case "date":
            return new Date().toISOString().substring(0, 10);
        case "date-time":
            return new Date().toISOString();
        case "email":
            return "user@example.com";
        case "hostname":
            return "example.com";
        case "ipv4":
            return "198.51.100.42";
        case "ipv6":
            return "2001:0db8:5b96:0000:0000:426f:8e17:642a";
        case "uuid":
            return "3fa85f64-5717-4562-b3fc-2c963f66afa6";
        default:
            return "string";
    }
};

const exampleForObject = (schema: any, config: IExampleConfiguartion = {}): any => {
    const { properties, additionalProperties } = schema;

    const obj: any = {};
    for (const name in properties) {
        if (properties[name] && properties[name].deprecated) {
            continue;
        }
        if (properties[name] && properties[name].readOnly && !config.includeReadOnly) {
            continue;
        }
        if (properties[name] && properties[name].writeOnly && !config.includeWriteOnly) {
            continue;
        }
        obj[name] = exampleForSchema(properties[name], config);
    }

    if (additionalProperties === true) {
        obj.additionalProp1 = {};
    } else if (additionalProperties) {
        const additionalPropVal = exampleForSchema(additionalProperties, config);

        for (let i = 1; i < 4; i++) {
            obj["additionalProp" + i] = additionalPropVal;
        }
    }
    return obj;
};

const exampleForArray = (schema: any, config: IExampleConfiguartion = {}): any => {
    const { items } = schema;
    if (Array.isArray(items.anyOf)) {
        return items.anyOf.map((i: any) => exampleForSchema(i, config));
    } else if (Array.isArray(items.oneOf)) {
        return items.oneOf.map((i: any) => exampleForSchema(i, config));
    }

    return [exampleForSchema(items, config)];
};

export default example;
