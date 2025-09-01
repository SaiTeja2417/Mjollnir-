"use client"
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Users, User } from "lucide-react";

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  rides: number;
  distance: number;
  carbonSaved: number;
}

interface GroupLeaderboardEntry {
  id: string;
  groupName: string;
  members: number;
  totalScore: number;
  totalRides: number;
  totalDistance: number;
  totalCarbonSaved: number;
}

export default function Leaderboard() {
  const [individualLeaderboard, setIndividualLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [groupLeaderboard, setGroupLeaderboard] = useState<GroupLeaderboardEntry[]>([]);
  const [activeTab, setActiveTab] = useState("daily");
  const [loading, setLoading] = useState(true);

  // Mock API data - In real implementation, this would fetch from MJOLLNIR APIs
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock individual leaderboard data
      const mockIndividualData: LeaderboardEntry[] = [
        { id: "1", name: "Rajesh Kumar", score: 2850, rides: 45, distance: 180.5, carbonSaved: 42.3 },
        { id: "2", name: "Priya Sharma", score: 2680, rides: 42, distance: 165.2, carbonSaved: 38.7 },
        { id: "3", name: "Amit Patel", score: 2520, rides: 38, distance: 152.8, carbonSaved: 35.8 },
        { id: "4", name: "Sneha Reddy", score: 2340, rides: 35, distance: 142.1, carbonSaved: 33.3 },
        { id: "5", name: "Vikram Singh", score: 2180, rides: 32, distance: 128.4, carbonSaved: 30.1 },
        { id: "6", name: "Anitha Nair", score: 2050, rides: 30, distance: 118.7, carbonSaved: 27.8 },
        { id: "7", name: "Suresh Gupta", score: 1920, rides: 28, distance: 108.3, carbonSaved: 25.4 },
        { id: "8", name: "Kavya Krishnan", score: 1780, rides: 25, distance: 95.6, carbonSaved: 22.4 }
      ];

      // Mock group leaderboard data
      const mockGroupData: GroupLeaderboardEntry[] = [
        { id: "1", groupName: "Green Commuters", members: 24, totalScore: 18500, totalRides: 280, totalDistance: 1450.2, totalCarbonSaved: 340.2 },
        { id: "2", groupName: "Eco Warriors", members: 18, totalScore: 16200, totalRides: 245, totalDistance: 1280.8, totalCarbonSaved: 300.5 },
        { id: "3", groupName: "Cycle Champions", members: 22, totalScore: 15800, totalRides: 238, totalDistance: 1205.3, totalCarbonSaved: 282.8 },
        { id: "4", groupName: "Urban Riders", members: 20, totalScore: 14500, totalRides: 220, totalDistance: 1125.7, totalCarbonSaved: 264.1 },
        { id: "5", groupName: "Sustainable Squad", members: 16, totalScore: 13200, totalRides: 195, totalDistance: 980.4, totalCarbonSaved: 230.0 }
      ];

      setIndividualLeaderboard(mockIndividualData);
      setGroupLeaderboard(mockGroupData);
      setLoading(false);
    };

    fetchLeaderboardData();
  }, [activeTab]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-500">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500";
      case 2:
        return "bg-gray-400";
      case 3:
        return "bg-amber-600";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section id="leaderboard" className="py-20 bg-white font-codec-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leaderboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See whos leading the way in sustainable mobility and making the biggest impact
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="all-time">All-Time</TabsTrigger>
          </TabsList>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Individual Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Individual Leaders
                </CardTitle>
                <CardDescription>Top performing individual riders</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="animate-pulse flex items-center space-x-4">
                        <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {individualLeaderboard.map((entry, index) => (
                      <div key={entry.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-10 h-10">
                            {getRankIcon(index + 1)}
                          </div>
                          <div>
                            <div className="font-semibold">{entry.name}</div>
                            <div className="text-sm text-gray-500">
                              {entry.rides} rides • {entry.distance}km • {entry.carbonSaved}kg CO₂ saved
                            </div>
                          </div>
                        </div>
                        <Badge className={`${getRankBadgeColor(index + 1)} text-white`}>
                          {entry.score.toLocaleString()} pts
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Group Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Group Leaders
                </CardTitle>
                <CardDescription>Top performing groups and teams</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="animate-pulse flex items-center space-x-4">
                        <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {groupLeaderboard.map((group, index) => (
                      <div key={group.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-10 h-10">
                            {getRankIcon(index + 1)}
                          </div>
                          <div>
                            <div className="font-semibold">{group.groupName}</div>
                            <div className="text-sm text-gray-500">
                              {group.members} members • {group.totalRides} rides • {group.totalDistance}km
                            </div>
                          </div>
                        </div>
                        <Badge className={`${getRankBadgeColor(index + 1)} text-white`}>
                          {group.totalScore.toLocaleString()} pts
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Period-specific content could be added here for different tabs */}
          <TabsContent value="daily" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Daily Champions</CardTitle>
                <CardDescription>Todays top performers making a difference</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}