/**
 * sort file name list
 * @param list
 */
export async function fileListSort(fileList: string[]): Promise<string[]> {
  const collect: { [key: string]: string[] } = {};
  for (const path of fileList) {
    const pathArr = path.split("/");

    const pathDeep = pathArr.length;
    collect[pathDeep] || (collect[pathDeep] = []);
    collect[pathDeep].push(path);
  }

  for (const pathDeep in collect) {
    collect[pathDeep].sort((aItem, bItem) => {
      const length = aItem.length > bItem.length ? aItem.length : bItem.length;
      for (let i = 0; i < length; i++) {
        const aaItem = aItem?.charCodeAt(i) || 0;
        const bbItem = bItem?.charCodeAt(i) || 0;
        const result = aaItem - bbItem;
        if (result != 0) return result;
      }
    });
  }
  const result = [];
  for (const pathDeep in collect) {
    for (const path of collect[pathDeep]) {
      result.push(path);
    }
  }
  return result;
}

