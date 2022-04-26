export default function HeaderSearch() {
  return (
    <div className="header__search">
      <span className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.196"
          height="16.196"
          viewBox="0 0 16.196 16.196"
        >
          <path
            id="Path_2431"
            data-name="Path 2431"
            d="M16,15.068l-2.784-2.722h0l-.065-.1a.656.656,0,0,0-.921,0h0a6.57,6.57,0,0,1-8.518.276A6.219,6.219,0,0,1,2.329,4.3a6.54,6.54,0,0,1,8.161-2.4,6.269,6.269,0,0,1,3.494,7.6.631.631,0,0,0,.147.625.665.665,0,0,0,.627.188.65.65,0,0,0,.48-.437h0A7.559,7.559,0,0,0,11.189.762,7.9,7.9,0,0,0,1.368,3.308a7.5,7.5,0,0,0,1.1,9.875A7.927,7.927,0,0,0,12.62,13.6l2.465,2.41a.663.663,0,0,0,.921,0,.635.635,0,0,0,0-.907h0Z"
            fill="#fff"
          />
        </svg>
      </span>
      <input type="text" className="header__search--input" placeholder="Search" />
    </div>
  );
}
