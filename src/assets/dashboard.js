export const dashboardData = {
    "timeFrames": {
        "overall": {
            "summaryCards": {
                totalCustomers: 12000,
                totalLeads: 4500,
                totalSales: 900000,
                openSupportTickets: 120,
            },
            "kpis": {
                conversionRate: 5.5,
                customerSatisfactionScore: 4.7,
                totalSales: "90k",
            },
            "charts": {
                "revenueTrend": [
                    { period: 'January', revenue: 100000 },
                    { period: 'February', revenue: 120000 },
                    { period: 'March', revenue: 140000 },
                    { period: 'April', revenue: 150000 },
                    { period: 'May', revenue: 110000 },
                    { period: 'June', revenue: 145000 },
                ],
                "salesFunnel": {
                    prospects: 2000,
                    leads: 1500,
                    opportunities: 1000,
                    sales: 800,
                },
                "leadsBySource": {
                    'Google Ads': 1200,
                    'Social Media': 900,
                    'Direct Traffic': 500,
                    'Referrals': 400,
                },
            },
        },
      "1Day": {
        "summaryCards": {
          "totalCustomers": 5,
          "totalLeads": 12,
          "totalSales": 5000,
          "openSupportTickets": 1
        },
        "kpis": {
          "conversionRate": 10.2,
          "customerSatisfactionScore": 8.9,
          "totalSales": "5k"
        },
        "charts": {
          "revenueTrend": [
            { "hour": "08:00", "revenue": 1000 },
            { "hour": "12:00", "revenue": 2000 },
            { "hour": "16:00", "revenue": 1500 },
            { "hour": "20:00", "revenue": 500 }
          ],
          "salesFunnel": {
            "newLeads": 12,
            "contacted": 8,
            "qualified": 5,
            "proposalSent": 3,
            "closedDeals": 2
          },
          "leadsBySource": {
            "website": 6,
            "referrals": 3,
            "socialMedia": 2,
            "events": 1
          }
        }
      },
      "1Week": {
        "summaryCards": {
          "totalCustomers": 25,
          "totalLeads": 60,
          "totalSales": 35000,
          "openSupportTickets": 5
        },
        "kpis": {
          "conversionRate": 13.5,
          "customerSatisfactionScore": 8.6,
          "totalSales": "3.5k"
        },
        "charts": {
          "revenueTrend": [
            { "day": "Monday", "revenue": 10000 },
            { "day": "Tuesday", "revenue": 7000 },
            { "day": "Wednesday", "revenue": 5000 },
            { "day": "Thursday", "revenue": 6000 },
            { "day": "Friday", "revenue": 5000 },
            { "day": "Saturday", "revenue": 2000 },
            { "day": "Sunday", "revenue": 5000 }
          ],
          "salesFunnel": {
            "newLeads": 60,
            "contacted": 40,
            "qualified": 30,
            "proposalSent": 15,
            "closedDeals": 10
          },
          "leadsBySource": {
            "website": 30,
            "referrals": 15,
            "socialMedia": 10,
            "events": 5
          }
        }
      },
      "1Month": {
        "summaryCards": {
          "totalCustomers": 100,
          "totalLeads": 240,
          "totalSales": 120000,
          "openSupportTickets": 12
        },
        "kpis": {
          "conversionRate": 15.5,
          "customerSatisfactionScore": 8.7,
          "totalSales": "120k"
        },
        "charts": {
          "revenueTrend": [
            { "week": "Week 1", "revenue": 30000 },
            { "week": "Week 2", "revenue": 40000 },
            { "week": "Week 3", "revenue": 20000 },
            { "week": "Week 4", "revenue": 30000 }
          ],
          "salesFunnel": {
            "newLeads": 240,
            "contacted": 160,
            "qualified": 100,
            "proposalSent": 60,
            "closedDeals": 40
          },
          "leadsBySource": {
            "website": 120,
            "referrals": 80,
            "socialMedia": 30,
            "events": 10
          }
        }
      }
    }
  }
  