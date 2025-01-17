interface TrashIconInterface {
  w?: string;
  h?: string;
}

const TrashIcon = ({ ...props }: TrashIconInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ props.w ? props.w: '15'}
      height={ props.h ? props.h : '16'}
      fill="none"
      viewBox="0 0 15 16"
    >
      <path
        fill="#fff"
        d="M13.673 2.91h-2.618v-.874A2.036 2.036 0 009.018 0h-3.49A2.036 2.036 0 003.49 2.036v.873H.873a.873.873 0 000 1.746h.29v9.89A1.455 1.455 0 002.619 16h9.31a1.455 1.455 0 001.454-1.454V4.655h.29a.873.873 0 100-1.746zm-8.437-.874a.29.29 0 01.291-.29h3.491a.29.29 0 01.291.29v.873H5.236v-.873zm6.4 12.219H2.91v-9.6h8.727v9.6zM6.4 6.982v4.654a.873.873 0 01-1.745 0V6.982a.873.873 0 111.745 0zm3.49 0v4.654a.873.873 0 01-1.745 0V6.982a.873.873 0 111.746 0z"
      ></path>
    </svg>
  );
};

export default TrashIcon;
