// export const toSlug = (str) => str.toLowerCase().replace(/\s+/g, "-");

export const toSlug = (value = "") => {
    if (typeof value !== "string") return "";
    return value.toLowerCase().trim().replace(/\s+/g, "-");
};
