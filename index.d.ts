


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
    placements: Array<{
      year: number;
      placed_students: Array<{
        full_name: string;
        email: string;
        branch:string;
      }>
    }>
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

  type TPODrivesResponseType={
    count: number;
    drives: Array<DriveCardData>
  }


  type fetchDrivesResponseType = {
    drives: Array<DriveCardData>;
    total: number;
    lastPageNumber: number;
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

  type DriveStudentDataType = Omit<DriveData, 'registered'> & {
    applied: boolean;
  }

  //route types

type RootStackParamList  ={
  Welcome: undefined;
  Login: undefined;
  student: NavigationProp<StudentDrawerParamList>;
  tpo: NavigationProp<TPODrawerParamList>;
  alumni: undefined;
  hod: undefined;
}


type StudentDrawerParamList = {
    Home: undefined;
    OngoingDrives: undefined;
    Drive: {
        drive_id: string
    };
    Companies: undefined;
    Company: {
      company_id: string
    };
    Profile: undefined;
    "Ongoing Drives": undefined;
}

type TPODrawerParamList = { 
  Home: undefined;
  "Add Student": undefined;
  "Add Company": undefined;
  "Add Drive": undefined;
  "Ongoing Drives": undefined;
  Profile: undefined;
  Drive: {
    drive_id: string;
  }
};


type TPOProfile = {

  user_id: string;
  title: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  mobile: string;

}