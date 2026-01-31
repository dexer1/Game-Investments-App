import { useState } from 'react';
import {
  TrendingUp,
  LayoutDashboard,
  Briefcase,
  Eye,
  Bot,
  Settings,
  ChevronRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

// Mock data for portfolio performance
const portfolioData = [
  { month: 'Jan', value: 11500 },
  { month: 'Feb', value: 11800 },
  { month: 'Mar', value: 12100 },
  { month: 'Apr', value: 11900 },
  { month: 'May', value: 12500 },
  { month: 'Jun', value: 13200 },
  { month: 'Jul', value: 13800 },
  { month: 'Aug', value: 14100 },
  { month: 'Sep', value: 14500 },
  { month: 'Oct', value: 14200 },
  { month: 'Nov', value: 14600 },
  { month: 'Dec', value: 14850 },
];

// Mock data for asset allocation
const allocationData = [
  { name: 'CS2', value: 9650, percentage: 65 },
  { name: 'Dota 2', value: 3700, percentage: 25 },
  { name: 'Rust', value: 1500, percentage: 10 },
];

const COLORS = ['#FACC15', '#EF4444', '#F97316'];

// Mock inventory data
const inventoryData = [
  {
    id: 1,
    name: 'AWP | Asiimov',
    game: 'CS2',
    buyPrice: 85.0,
    currentPrice: 120.0,
    change: 2.5,
    image: 'https://images.unsplash.com/photo-1662348318688-a789048d99f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwd2VhcG9uJTIwcmlmbGV8ZW58MXx8fHwxNzY5Nzk3NDAzfDA&ixlib=rb-4.1.0&q=80&w=200',
  },
  {
    id: 2,
    name: 'Dragonclaw Hook',
    game: 'Dota 2',
    buyPrice: 800.0,
    currentPrice: 780.0,
    change: -1.2,
    image: 'https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFnb24lMjBmYW50YXN5JTIwYXJ0fGVufDF8fHx8MTc2OTg5MTg4NXww&ixlib=rb-4.1.0&q=80&w=200',
  },
];

export default function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y');

  return (
    <div className="dark min-h-screen bg-[#0F1115] font-['Inter',sans-serif]">
      {/* Main Container - Fixed Width 1440px */}
      <div className="mx-auto flex max-w-[1440px]">
        {/* LEFT SIDEBAR */}
        <aside className="fixed left-0 top-0 h-screen w-[260px] border-r border-[#30363D] bg-[#050505] p-6">
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="mb-12 flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-[#6366F1]" />
              <span className="text-2xl font-bold text-white">SkinVest</span>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 space-y-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-[#6366F1] bg-[#6366F1]/10 px-4 py-3 text-white transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-colors hover:bg-[#30363D]/30 hover:text-white"
              >
                <Briefcase className="h-5 w-5" />
                <span>My Portfolio</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-colors hover:bg-[#30363D]/30 hover:text-white"
              >
                <Eye className="h-5 w-5" />
                <span>Market Watch</span>
                <Badge className="ml-auto bg-[#FF2E51] text-white hover:bg-[#FF2E51]">
                  Hot
                </Badge>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-colors hover:bg-[#30363D]/30 hover:text-white"
              >
                <Bot className="h-5 w-5" />
                <span>AI Predictions</span>
                <Badge className="ml-auto bg-[#00FF94] text-black hover:bg-[#00FF94]">
                  New
                </Badge>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-colors hover:bg-[#30363D]/30 hover:text-white"
              >
                <Settings className="h-5 w-5" />
                <span>Settings / API Keys</span>
              </a>
            </nav>

            {/* User Widget */}
            <div className="mt-auto flex items-center gap-3 rounded-lg border border-[#30363D] bg-[#050505] p-3">
              <img
                src="https://images.unsplash.com/photo-1631624220291-8f191fbdb543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2OTg5MTg4Nnww&ixlib=rb-4.1.0&q=80&w=100"
                alt="User Avatar"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">AlexDev</div>
                <div className="text-xs text-[#00FF94]">Pro Member</div>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="ml-[260px] flex-1 p-8">
          <div className="space-y-6">
            {/* BLOCK 1: Portfolio Summary Hero */}
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1: Total Valuation */}
              <div className="rounded-xl border border-[#30363D] bg-black/40 p-6 backdrop-blur-sm">
                <div className="mb-2 text-sm text-gray-400">
                  Net Worth (Real-Time)
                </div>
                <div className="mb-1 font-['JetBrains_Mono',monospace] text-4xl font-bold text-white">
                  $14,850.45
                </div>
                <div className="text-xs text-gray-500">
                  Updated: 10s ago via Steam API
                </div>
              </div>

              {/* Card 2: Total P&L */}
              <div className="rounded-xl border border-[#30363D] bg-black/40 p-6 backdrop-blur-sm">
                <div className="mb-2 text-sm text-gray-400">
                  All-Time Profit
                </div>
                <div className="mb-2 font-['JetBrains_Mono',monospace] text-4xl font-bold text-[#00FF94]">
                  +$3,240.12
                </div>
                <Badge className="bg-[#00FF94]/20 text-[#00FF94] hover:bg-[#00FF94]/20">
                  ▲ 28.4%
                </Badge>
              </div>

              {/* Card 3: Top Performer */}
              <div className="rounded-xl border border-[#30363D] bg-black/40 p-6 backdrop-blur-sm">
                <div className="mb-2 text-sm text-gray-400">Best Asset</div>
                <div className="mb-2 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFnb24lMjBmYW50YXN5JTIwYXJ0fGVufDF8fHx8MTc2OTg5MTg4NXww&ixlib=rb-4.1.0&q=80&w=100"
                    alt="Dragon Lore"
                    className="h-12 w-12 rounded object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      AWP | Dragon Lore
                    </div>
                    <div className="font-['JetBrains_Mono',monospace] text-sm text-[#00FF94]">
                      +125% (YTD)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2: Main Chart */}
            <div className="rounded-xl border border-[#30363D] bg-black/40 p-6 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                  Portfolio Performance History
                </h2>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', '1Y', 'ALL'].map((timeframe) => (
                    <button
                      key={timeframe}
                      onClick={() => setSelectedTimeframe(timeframe)}
                      className={`rounded px-3 py-1 text-sm transition-colors ${
                        selectedTimeframe === timeframe
                          ? 'bg-[#6366F1] text-white'
                          : 'text-gray-400 hover:bg-[#30363D]/30 hover:text-white'
                      }`}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={portfolioData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FF94" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00FF94" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#30363D" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#050505',
                      border: '1px solid #30363D',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                    formatter={(value: number) => [
                      `$${value.toLocaleString()}`,
                      'Value',
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#00FF94"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* BLOCK 3: Split Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* LEFT: Asset Distribution */}
              <div className="rounded-xl border border-[#30363D] bg-black/40 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Allocation by Game
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#050505',
                        border: '1px solid #30363D',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                      formatter={(value: number) => [
                        `$${value.toLocaleString()}`,
                        'Value',
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {allocationData.map((item, index) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="text-sm text-gray-300">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-['JetBrains_Mono',monospace] text-sm text-white">
                          {item.percentage}%
                        </div>
                        <div className="text-xs text-gray-500">
                          ${item.value.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: AI Market Forecast */}
              <div className="rounded-xl border border-[#30363D] bg-black/40 p-6 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  Machine Learning Price Prediction
                  <Bot className="h-5 w-5 text-[#6366F1]" />
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border border-[#30363D] bg-[#050505] p-4">
                    <div className="mb-2 text-xs text-gray-400">
                      Target Item
                    </div>
                    <div className="mb-3 text-base font-medium text-white">
                      AK-47 | Vulcan (Factory New)
                    </div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        Current Price
                      </span>
                      <span className="font-['JetBrains_Mono',monospace] text-sm text-white">
                        $750.00
                      </span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#00FF94] bg-[#00FF94]/10 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge className="bg-[#00FF94] text-black hover:bg-[#00FF94]">
                        BULLISH 🚀
                      </Badge>
                    </div>
                    <div className="mb-3 text-sm text-gray-300">
                      87% confidence based on 30-day volume analysis
                    </div>
                    <div className="h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={[
                            { day: 1, price: 750 },
                            { day: 2, price: 760 },
                            { day: 3, price: 775 },
                            { day: 4, price: 790 },
                            { day: 5, price: 810 },
                          ]}
                        >
                          <defs>
                            <linearGradient
                              id="predictionGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#00FF94"
                                stopOpacity={0.5}
                              />
                              <stop
                                offset="95%"
                                stopColor="#00FF94"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#00FF94"
                            strokeWidth={2}
                            fill="url(#predictionGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 4: Active Inventory Table */}
            <div className="rounded-xl border border-[#30363D] bg-black/40 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Your Assets
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#30363D] text-left text-sm text-gray-400">
                      <th className="pb-3 font-medium">Asset Name</th>
                      <th className="pb-3 font-medium">Game</th>
                      <th className="pb-3 font-medium">Buy Price</th>
                      <th className="pb-3 font-medium">Current Price</th>
                      <th className="pb-3 font-medium">24h Change</th>
                      <th className="pb-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-[#30363D]/50 transition-colors hover:bg-[#30363D]/20"
                      >
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-12 w-12 rounded object-cover"
                            />
                            <span className="font-medium text-white">
                              {item.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-gray-300">
                            {item.game}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="font-['JetBrains_Mono',monospace] text-sm text-gray-300">
                            ${item.buyPrice.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="font-['JetBrains_Mono',monospace] text-sm text-white">
                            ${item.currentPrice.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-4">
                          <span
                            className={`font-['JetBrains_Mono',monospace] text-sm ${
                              item.change >= 0
                                ? 'text-[#00FF94]'
                                : 'text-[#FF2E51]'
                            }`}
                          >
                            {item.change >= 0 ? '+' : ''}
                            {item.change}%
                          </span>
                        </td>
                        <td className="py-4">
                          <Button
                            size="sm"
                            className={
                              item.change >= 0
                                ? 'bg-[#00FF94] text-black hover:bg-[#00FF94]/80'
                                : 'bg-[#30363D] text-gray-300 hover:bg-[#30363D]/80'
                            }
                          >
                            {item.change >= 0 ? 'Sell' : 'Hold'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="mt-12 border-t border-[#30363D] py-6">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div>
                Data provided by Steam Community Market API. Not affiliated with
                Valve.
              </div>
              <div>© 2026 SkinVest. Engineered by Your Name.</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
