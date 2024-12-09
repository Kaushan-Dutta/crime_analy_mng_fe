export type FilterProps = {
    props: ("By Date" | "By Status" | "By Time")[];
};
export interface ListDropDownProps {
    searchList: string[];
    activeItem: number;
    setItem: (item: string) => void;
    setActive: (active: string) => void;
}

type PopType = {
    open: boolean;
    setOpen: (value: boolean) => void;
  };
  