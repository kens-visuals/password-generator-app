function Strength() {
  return (
    <div className="mb-4 flex items-center justify-between bg-primary p-3">
      <span className="text-body uppercase text-secondary">Strength</span>

      <div className="flex items-center justify-between gap-4">
        <span className="text-body uppercase text-secondary-light">Medium</span>

        <div className="flex items-center justify-between gap-2">
          <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
          <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
          <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
          <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
        </div>
      </div>
    </div>
  );
}

export default Strength;
