import { Building2, Trophy, Medal, TrendingUp, Users } from "lucide-react";

const institutionRanking = [
  { pos: 1, name: "Colegio Los Olivos", city: "Loja", pct: 98, streak: 30, pts: 4820, members: 45, level: "Excelencia FUNCAJE" },
  { pos: 2, name: "Unidad Educativa CAJE", city: "Catamayo", pct: 96, streak: 28, pts: 4510, members: 62, level: "Excelencia FUNCAJE" },
  { pos: 3, name: "Centro Educativo Amazonas", city: "Machala", pct: 95, streak: 22, pts: 4180, members: 38, level: "Excelencia FUNCAJE" },
  { pos: 4, name: "Instituto Nacional Sucre", city: "Quito", pct: 90, streak: 18, pts: 3640, members: 80, level: "Ejemplar" },
  { pos: 5, name: "Colegio Técnico Industrial", city: "Guayaquil", pct: 88, streak: 14, pts: 3210, members: 55, level: "Ejemplar" },
  { pos: 6, name: "Escuela Fiscal Simón Bolívar", city: "Cuenca", pct: 85, streak: 10, pts: 2890, members: 42, level: "Ejemplar" },
  { pos: 7, name: "Centro Cultural Pachamama", city: "Ambato", pct: 83, streak: 8, pts: 2540, members: 29, level: "Responsable" },
  { pos: 8, name: "Fundación Educativa Norte", city: "Ibarra", pct: 81, streak: 5, pts: 2210, members: 33, level: "Responsable" },
];

const medalColors = ["text-yellow-500", "text-slate-400", "text-amber-600"];
const levelColors: Record<string, string> = {
  "Excelencia FUNCAJE": "bg-secondary-light text-secondary",
  "Ejemplar": "bg-primary-light text-primary",
  "Responsable": "bg-muted text-muted-foreground",
};

const Ranking = () => {
  return (
    <div>
      {/* Header */}
      <div className="gradient-hero px-5 pt-12 pb-6">
        <h1 className="text-primary-foreground text-2xl font-bold mb-1">Ranking Institucional</h1>
        <p className="text-primary-foreground/70 text-sm">Instituciones más puntuales · Febrero 2026</p>
      </div>

      <div className="px-5 pt-5">
        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-2 mb-6">
          {[institutionRanking[1], institutionRanking[0], institutionRanking[2]].map((inst, i) => {
            const heights = ["h-24", "h-32", "h-20"];
            return (
              <div key={inst.pos} className="flex flex-col items-center gap-2 flex-1">
                <div className={`w-14 h-14 rounded-2xl ${i === 1 ? "gradient-gold" : "gradient-hero"} flex items-center justify-center shadow-primary border-2 border-secondary`}>
                  <Building2 size={i === 1 ? 28 : 22} className="text-primary-foreground" />
                </div>
                <p className="text-[10px] font-bold text-foreground text-center leading-tight px-1 line-clamp-2">{inst.name}</p>
                <p className="text-[10px] text-muted-foreground">{inst.city}</p>
                <div className={`${heights[i]} w-full rounded-t-xl flex flex-col items-center justify-center ${i === 1 ? "gradient-gold" : "bg-primary/20"}`}>
                  {i === 1 && <Trophy size={20} className="text-primary-foreground mb-1" />}
                  <span className={`text-xl font-black ${i === 1 ? "text-primary-foreground" : "text-primary"}`}>{inst.pos}°</span>
                  <span className={`text-sm font-black ${i === 1 ? "text-primary-foreground/80" : "text-primary/70"}`}>{inst.pct}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Ranking List */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden mb-5">
          {institutionRanking.map((inst) => (
            <div key={inst.pos} className="flex items-center gap-3 px-4 py-3.5 border-b border-border last:border-0">
              {/* Position */}
              <div className={`w-7 text-center font-black text-sm flex-shrink-0 ${inst.pos <= 3 ? medalColors[inst.pos - 1] : "text-muted-foreground"}`}>
                {inst.pos <= 3
                  ? <Medal size={18} className="mx-auto" />
                  : `${inst.pos}°`}
              </div>

              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${inst.pos <= 3 ? "gradient-gold" : "bg-primary-light"}`}>
                <Building2 size={18} className={inst.pos <= 3 ? "text-primary-foreground" : "text-primary"} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-foreground truncate">{inst.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-xs text-muted-foreground">{inst.city}</p>
                  <span className="text-muted-foreground">·</span>
                  <div className="flex items-center gap-0.5 text-muted-foreground">
                    <Users size={10} />
                    <span className="text-xs">{inst.members}</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${inst.pct}%` }} />
                  </div>
                  <span className="text-xs font-bold text-primary whitespace-nowrap">{inst.pct}%</span>
                </div>
              </div>

              {/* Badge & Points */}
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-black text-foreground">{inst.pts.toLocaleString()}</p>
                <p className="text-[9px] text-muted-foreground">pts</p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${levelColors[inst.level]}`}>
                  {inst.level === "Excelencia FUNCAJE" ? "Excelencia" : inst.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-card rounded-2xl p-3 shadow-card text-center">
            <TrendingUp size={16} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-black text-foreground">91%</p>
            <p className="text-[10px] text-muted-foreground font-semibold">Puntualidad promedio</p>
          </div>
          <div className="bg-card rounded-2xl p-3 shadow-card text-center">
            <Building2 size={16} className="text-secondary mx-auto mb-1" />
            <p className="text-lg font-black text-foreground">8</p>
            <p className="text-[10px] text-muted-foreground font-semibold">Instituciones</p>
          </div>
          <div className="bg-card rounded-2xl p-3 shadow-card text-center">
            <Trophy size={16} className="text-secondary mx-auto mb-1" />
            <p className="text-lg font-black text-foreground">3</p>
            <p className="text-[10px] text-muted-foreground font-semibold">En Excelencia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
