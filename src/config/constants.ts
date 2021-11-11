import { format, set } from "date-fns";
export class Constants {
  get requiredFieldErrorMsg() {
    return "is a required field";
  }
}
export const INITIAL_COUNTRY = "in";

export const dateFormat = "yyyy-MM-dd";

export const localDateFormat = "dd/MM/yyyy";

export const setDate = (str: string, formatDate?: string) => {
  const words = str.split("-");
  const year = words[0];
  const month = words[1];
  const dateTime = words[2].split(" ");
  const date = dateTime[0];
  const time = dateTime[1].split(":");
  const hours = parseInt(time[0]);
  const minutes = parseInt(time[1]);
  return format(
    set(new Date(parseInt(year), parseInt(month), parseInt(date)), {
      hours,
      minutes,
    }),
    formatDate ? formatDate : localDateFormat
  );
};
