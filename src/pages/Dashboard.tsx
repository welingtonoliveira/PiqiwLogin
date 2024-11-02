import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Report {
  id: string;
  name: string;
  embedUrl: string;
}

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    setReports([
      {
        id: '1',
        name: 'Relatório de Vendas',
        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=your-report-id'
      },
      {
        id: '2',
        name: 'Dashboard Financeiro',
        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=your-report-id-2'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Seus Relatórios</h1>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="col-span-1 space-y-4">
              {reports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    selectedReport?.id === report.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {report.name}
                </button>
              ))}
            </div>
            
            <div className="col-span-3">
              {selectedReport ? (
                <iframe
                  title={selectedReport.name}
                  width="100%"
                  height="600"
                  src={selectedReport.embedUrl}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500">
                    Selecione um relatório para visualizar
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}