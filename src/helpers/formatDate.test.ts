import { formatDate } from "./formatDate";
test('default',()=>{
    expect(formatDate("2023-04-02")).toBe("2 Apr");
});
test('empty string',()=>{
    expect(() => formatDate("")).toThrow(Error);
});
test('incorrect date',()=>{
    expect(() =>formatDate("2020-2020-2020")).toThrow(Error);
});