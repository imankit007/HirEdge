
type AuthStateType = {
    role: 'student' | 'tpo' | 'hod' | 'alumni' | null;
    access_token: string | null;
}

type RoundType = {
    round_no: number;
    round_name: string;
    date: Date;
}

type StudentDashboardType={
    prevYearOffers:{
        _id : number;
        total: number;
    }
    currYearOffers: {
        _id: number;
        total: number;
    }
    currentStatus: {
        _id: string;
        company_id: string;
        job_title: string;
        companyDetails: {
            company_name: string;
        };
    }[]
}

type DriveData = {
    _id: string;
    company_id: string;
    job_title: string;
    tenth_cutoff: number;
    twelfth_cutoff: number;
    ug_cutoff?: any;
    job_location: string[];
    job_ctc: string;
    branch: string[];
    rounds: Round[];
    registered: string[];
    job_description: string;
    company_details: CompanyDetails;
  }

type  CompanyDetails = {
    _id: string;
    company_name: string;
    company_website: string;
  }
  type Round = {
    round_no: number;
    round_name: string;
    date: string;
  }

  type DriveCardData = {
    _id: string;
    company_id: string;
    job_title: string;
    job_ctc: string;
    company_name:string;
    company_website: string;
  }

type ManageDriveDataType = {
    _id: string
    job_title: string
    tenth_cutoff: number
    twelfth_cutoff: number
    ug_cutoff: any
    job_location: string[]
    job_ctc: string
    branch: string[]
    rounds: RoundType[]
    job_description: string
    company_details: Omit<CompanyDetails, _id>
  }

  type DriveStudentDataType = { 
    _id: string
  user_id: string
  mobile: string
  email: string
  tenth_percentage: number
  twelfth_percentage: number
  ug_cgpa: number
  dob: string
  branch: string
  first_name: string
  middle_name: string
  last_name: string
  status: string}
  