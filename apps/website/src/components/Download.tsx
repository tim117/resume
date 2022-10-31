export type DownloadProps = {
  children: any;
};

export default ({ children }: DownloadProps) => {
  const download = () => {
    window.print();
  };
  return (
    <button class="no-print" onClick={download}>
      {children}
    </button>
  );
};
