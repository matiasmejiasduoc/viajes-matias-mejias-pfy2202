export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="mb-4 flex border-b border-gray-200" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={active === tab.id}
          className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium ${
            active === tab.id ? 'border-sky-600 text-sky-700' : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
