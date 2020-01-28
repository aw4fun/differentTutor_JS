const ApiClient = {
    async getXml(url: string): Promise<XmlString> {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    }
};

const xmlJsonAdapter = (xml: XmlString): JsonString => {
    return  json;
};

const parseCourse = (data: JsonString): CourseDict => {
    return  course;
};

// @ts-ignore
(async () => {
    const data = await ApiClient.getXml('api_endpoint');
    const course = parseCourse(xmlJsonAdapter(data));
})();
