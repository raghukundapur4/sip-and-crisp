export default function GoogleAttribution() {
  return (
    <p className="flex items-center justify-center gap-2 text-xs text-muted">
      <span>Reviews from</span>
      <img
        src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
        alt="Google"
        className="h-4 w-4"
        width={16}
        height={16}
      />
      <span>Google</span>
    </p>
  );
}
