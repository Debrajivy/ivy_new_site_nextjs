
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, TrendingUp, CheckCircle } from 'lucide-react';

const PlacementReportCTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>

              <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mr-3">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-lg">Placement Report 2025</h3>
                    </div>
                    <div className="text-sm text-gray-500">Q1 2025</div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Average Salary Hike</span>
                        <span className="text-primary font-semibold">+ 67%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "67%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Placement Rate</span>
                        <span className="text-primary font-semibold">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Career Transition Success</span>
                        <span className="text-primary font-semibold">89%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "89%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Top Companies</div>
                      <div className="font-semibold">120+</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Highest Package</div>
                      <div className="font-semibold">₹42 LPA</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center text-gray-500 text-sm">
                      Last updated: 15th July, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: -40 }} className="order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <TrendingUp className="mr-2 h-4 w-4" />
              Placement Insights
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">What should I know about Ivy Pro School's placement and career outcomes?</h2>

            <p className="text-lg text-gray-700 mb-6">
              Ivy Professional School has a proven track record of placing students in top companies with significant salary improvements. Download our latest placement report to see how our graduates are thriving.
            </p>
            {/* Advanced AI for CXOs at Atlas Copco. 
            We can take the name of this company while posting. But we should also post with some use cases. */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">95% Placement Rate</h3>
                  <p className="text-gray-600">Almost all our students find relevant positions within 6 months</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Rated 4.9/5 on Google</h3>
                  <p className="text-gray-600">Highly rated on Google by more than 1250+ of students accross different industries.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Alumni with 500+ Companies</h3>
                  <p className="text-gray-600">Including Fortune 500 companies and innovative startups</p>
                </div>
              </div>
            </div>

            <a
              href="https://ivyproschool.com/wp-content/uploads/2015/07/Career-Transition-Handbook-4Jan2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Placement Report
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementReportCTA;
