export type DownloadProps = {
  children: any;
};

/** Download button that opens the broswer print dialog. */
export default ({ children }: DownloadProps) => {
  const download = () => {
    window.print();
  };
  return (
    <button class="no-print" onClick={download} aria-label="download">
      {children}
    </button>
  );
};
