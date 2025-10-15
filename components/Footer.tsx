export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4 text-sm">
        <div>
          <div className="font-semibold">Contact</div>
          <div>Email <a className="underline" href="mailto:jen@wellspringchaplain.com">jen@wellspringchaplain.com</a></div>
          <div>Phone (Call or Text) <a className="underline" href="tel:+17342749454">+1 (734) 274-9454‬</a></div>
          <div>Mailing Address: Jen Saries, 455 E. Eisenhower Pkwy. Ann Arbor, MI 48108</div>
        </div>
        <div className="text-xs text-slate-500">© {new Date().getFullYear()} Wellspring Chaplaincy</div>
      </div>
    </footer>
  );
}
