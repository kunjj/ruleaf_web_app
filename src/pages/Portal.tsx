import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Leaf, CalendarDays, Heart, AlertTriangle, Download } from "lucide-react";

const metrics = [
  { label: "Total Plants", value: "34", icon: Leaf, color: "text-green-light" },
  { label: "Next Service Visit", value: "14 Mar", icon: CalendarDays, color: "text-accent" },
  { label: "Plants Healthy", value: "31", icon: Heart, color: "text-green-light" },
  { label: "Alerts", value: "3", icon: AlertTriangle, color: "text-destructive" },
];

const activities = [
  { text: "Technician visit completed – Level 3, Zone B", time: "2 days ago" },
  { text: "Plant replaced: Fiddle Leaf Fig (Lobby)", time: "5 days ago" },
  { text: "Monthly invoice generated — $1,240", time: "7 days ago" },
  { text: "Alert raised: Monstera in Meeting Room 4", time: "8 days ago" },
  { text: "New contract renewal reminder sent", time: "12 days ago" },
];

const myPlants = [
  { name: "Monstera Deliciosa", location: "Lobby – Ground Floor", status: "Healthy", lastChecked: "10 Mar", nextService: "14 Mar" },
  { name: "Fiddle Leaf Fig", location: "Level 3 – Zone A", status: "Replacement Scheduled", lastChecked: "8 Mar", nextService: "12 Mar" },
  { name: "ZZ Plant", location: "Meeting Room 2", status: "Healthy", lastChecked: "10 Mar", nextService: "14 Mar" },
  { name: "Peace Lily", location: "Reception", status: "Healthy", lastChecked: "10 Mar", nextService: "14 Mar" },
  { name: "Snake Plant", location: "Level 2 – Open Plan", status: "Needs Water", lastChecked: "9 Mar", nextService: "14 Mar" },
  { name: "Pothos", location: "Breakroom", status: "Healthy", lastChecked: "10 Mar", nextService: "14 Mar" },
  { name: "Areca Palm", location: "Level 4 – Corner", status: "Needs Water", lastChecked: "9 Mar", nextService: "14 Mar" },
  { name: "Dracaena", location: "Meeting Room 4", status: "Healthy", lastChecked: "10 Mar", nextService: "14 Mar" },
];

const invoices = [
  { id: "INV-2024-001", date: "1 Mar 2024", amount: "$1,240", status: "Paid" },
  { id: "INV-2024-002", date: "1 Feb 2024", amount: "$1,240", status: "Paid" },
  { id: "INV-2024-003", date: "1 Jan 2024", amount: "$1,180", status: "Paid" },
  { id: "INV-2024-004", date: "1 Dec 2023", amount: "$1,180", status: "Paid" },
  { id: "INV-2024-005", date: "1 Nov 2023", amount: "$1,180", status: "Pending" },
];

const upcomingVisits = [
  { date: "14 Mar", tech: "James K.", time: "9:00 – 11:00 AM", zones: "Level 2, 3, Lobby" },
  { date: "28 Mar", tech: "Sarah L.", time: "10:00 – 12:00 PM", zones: "Level 4, Breakroom" },
  { date: "11 Apr", tech: "James K.", time: "9:00 – 11:00 AM", zones: "All zones" },
];

const statusBadge = (s: string) => {
  const map: Record<string, string> = {
    Healthy: "bg-green-light/10 text-green-light",
    "Needs Water": "bg-accent/10 text-accent",
    "Replacement Scheduled": "bg-destructive/10 text-destructive",
    Paid: "bg-green-light/10 text-green-light",
    Pending: "bg-accent/10 text-accent",
  };
  return map[s] || "bg-muted text-muted-foreground";
};

const Portal = () => {
  const [issueModal, setIssueModal] = useState(false);

  return (
    <main className="pt-20 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Welcome back, Acme Corp 👋</h1>
          <p className="text-muted-foreground text-sm mt-1">Your plant management dashboard</p>
        </motion.div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="plants">My Plants</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Card className="shadow-warm border-border">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <m.icon className={`w-5 h-5 ${m.color}`} />
                      </div>
                      <p className="font-mono text-2xl font-bold text-foreground">{m.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Health Chart */}
              <Card className="shadow-warm border-border">
                <CardHeader><CardTitle className="text-lg">Plant Health Overview</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "Healthy", pct: 91, color: "bg-green-light" },
                      { label: "Needs Attention", pct: 6, color: "bg-accent" },
                      { label: "Replacement", pct: 3, color: "bg-destructive" },
                    ].map((b) => (
                      <div key={b.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{b.label}</span>
                          <span className="font-mono font-medium text-foreground">{b.pct}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className={`h-2.5 rounded-full ${b.color} transition-all duration-1000`} style={{ width: `${b.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Activity Feed */}
              <Card className="shadow-warm border-border">
                <CardHeader><CardTitle className="text-lg">Recent Activity</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((a, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-foreground">{a.text}</p>
                          <p className="text-xs text-muted-foreground">{a.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming visits */}
            <Card className="shadow-warm border-border">
              <CardHeader><CardTitle className="text-lg">Upcoming Service Visits</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {upcomingVisits.map((v) => (
                    <div key={v.date} className="flex-shrink-0 bg-primary/5 rounded-xl p-4 min-w-[200px]">
                      <p className="font-mono font-bold text-primary text-lg">{v.date}</p>
                      <p className="text-sm text-foreground mt-1">{v.tech}</p>
                      <p className="text-xs text-muted-foreground">{v.time}</p>
                      <p className="text-xs text-muted-foreground mt-1">{v.zones}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plants">
            <Card className="shadow-warm border-border">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Plant Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">Last Checked</TableHead>
                        <TableHead className="hidden md:table-cell">Next Service</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {myPlants.map((p) => (
                        <TableRow key={p.name}>
                          <TableCell className="font-medium text-foreground">{p.name}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">{p.location}</TableCell>
                          <TableCell>
                            <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${statusBadge(p.status)}`}>{p.status}</span>
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{p.lastChecked}</TableCell>
                          <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{p.nextService}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => setIssueModal(true)}>Report Issue</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="shadow-warm border-border">
              <CardHeader><CardTitle className="text-lg">Maintenance Schedule</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-8">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <div key={d} className="text-center text-xs text-muted-foreground font-medium py-2">{d}</div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <div key={d} className={`text-center text-sm py-2 rounded-lg ${
                      [14, 28].includes(d) ? "bg-accent text-accent-foreground font-bold" :
                      d === 7 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"
                    }`}>{d}</div>
                  ))}
                </div>
                <div className="space-y-3">
                  {upcomingVisits.map((v) => (
                    <div key={v.date} className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                      <div className="font-mono font-bold text-primary">{v.date}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{v.tech}</p>
                        <p className="text-xs text-muted-foreground">{v.time} · {v.zones}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices">
            <Card className="shadow-warm border-border">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((inv) => (
                      <TableRow key={inv.id}>
                        <TableCell className="font-mono text-sm text-foreground">{inv.id}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{inv.date}</TableCell>
                        <TableCell className="font-medium text-foreground">{inv.amount}</TableCell>
                        <TableCell>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${statusBadge(inv.status)}`}>{inv.status}</span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={issueModal} onOpenChange={setIssueModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report an Issue</DialogTitle>
            <DialogDescription>Describe the issue with this plant and our team will address it during the next service visit.</DialogDescription>
          </DialogHeader>
          <textarea className="w-full border border-border rounded-xl p-3 text-sm bg-background min-h-[100px]" placeholder="Describe the issue..." />
          <Button className="bg-primary text-primary-foreground" onClick={() => setIssueModal(false)}>Submit Report</Button>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Portal;
