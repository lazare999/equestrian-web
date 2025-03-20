"use client";

export default function StableFilter({ selectedRegion, onFilterChange }) {
  return (
    <div>
      <label htmlFor="regionFilter">Filter by Region: </label>
      <select
        id="regionFilter"
        value={selectedRegion}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="kakheti">Kakheti</option>
        <option value="tbilisi">Tbilisi</option>
        <option value="samegrelo-zemo-svaneti">Samegrelo-Zemo Svaneti</option>
      </select>
    </div>
  );
}
