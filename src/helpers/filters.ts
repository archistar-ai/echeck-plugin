import moment from 'moment'

const filters = {
    price(input: number) {
        if (isNaN(input)) {
            return "-";
        }
        return '$' + input.toFixed(2);
    },
    formatSize(bytes: any) {
        if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
        else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
        else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
        else if (bytes > 1)           { bytes = bytes + " bytes"; }
        else if (bytes == 1)          { bytes = bytes + " byte"; }
        else                          { bytes = "0 bytes"; }
        return bytes;
    },
    formatDate(value: any){
        if (value) {
            return moment(String(value)).format('MMM DD, YYYY')
        }
    }
}
export default filters;