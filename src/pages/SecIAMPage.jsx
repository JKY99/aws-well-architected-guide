import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecIAMPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 신원 및 접근 관리</h1>

      <p>
        AWS 서비스를 사용하려면 사용자와 애플리케이션에 AWS 계정 리소스에 대한 접근 권한을 부여해야 합니다.
        워크로드가 확장됨에 따라 적절한 사람이 올바른 조건 아래에서 올바른 리소스에 접근하도록
        강력한 자격증명 관리와 권한 체계가 필요합니다.
      </p>

      <h2>자격증명 관리 (Identity Management)</h2>

      <h3>인간 자격증명 (Human Identities)</h3>
      <ul>
        <li><strong>인력 (Workforce):</strong> 조직 구성원인 관리자, 개발자, 운영자</li>
        <li><strong>제3자 (Third Parties):</strong> 계약자, 벤더, 파트너 등 외부 협력자</li>
        <li><strong>사용자 (Users):</strong> 웹 브라우저, 모바일 앱 등을 통해 애플리케이션을 이용하는 최종 사용자</li>
      </ul>

      <h3>기계 자격증명 (Machine Identities)</h3>
      <p>
        EC2 인스턴스, Lambda 함수 등 AWS 환경 내 워크로드 구성 요소가
        AWS 서비스를 호출하기 위해 필요한 자격증명입니다.
      </p>

      <h3>자격증명 관리 모범 사례</h3>
      <ul>
        <li><strong>SEC02-BP01:</strong> 강력한 로그인 메커니즘 사용</li>
        <li><strong>SEC02-BP02:</strong> 임시 자격증명 사용</li>
        <li><strong>SEC02-BP03:</strong> 시크릿을 안전하게 저장·사용</li>
        <li><strong>SEC02-BP04:</strong> 중앙 집중식 자격증명 공급자(IdP) 활용</li>
        <li><strong>SEC02-BP05:</strong> 자격증명 주기적 감사 및 교체</li>
        <li><strong>SEC02-BP06:</strong> 사용자 그룹 및 속성 활용</li>
      </ul>

      <h2>권한 관리 (Permissions Management)</h2>

      <h3>정책 유형</h3>
      <ul>
        <li>
          <strong>자격증명 기반 정책:</strong> IAM 사용자·그룹·역할에 연결되는 관리형/인라인 정책
          <ul>
            <li>AWS 관리형 정책: AWS가 생성·관리</li>
            <li>고객 관리형 정책: 사용자가 직접 생성하며 최소 권한 원칙 적용 권장</li>
          </ul>
        </li>
        <li><strong>리소스 기반 정책:</strong> S3 버킷 정책 등 리소스에 직접 연결</li>
        <li><strong>권한 경계 (Permissions Boundaries):</strong> 관리자가 부여할 수 있는 최대 권한을 제한</li>
        <li><strong>속성 기반 접근 제어 (ABAC):</strong> 태그를 기반으로 권한을 부여하여 유연한 접근 제어 실현</li>
        <li><strong>조직 서비스 제어 정책 (SCP):</strong> AWS Organizations 수준에서 계정의 최대 권한 정의</li>
        <li><strong>세션 정책:</strong> 역할 수임 시 세션 범위의 권한을 임시로 제한</li>
      </ul>

      <h3>권한 관리 모범 사례</h3>
      <ul>
        <li><strong>SEC03-BP01:</strong> 접근 요구사항 정의</li>
        <li><strong>SEC03-BP02:</strong> 최소 권한 접근 부여</li>
        <li><strong>SEC03-BP03:</strong> 비상 접근 프로세스 수립</li>
        <li><strong>SEC03-BP04:</strong> 지속적인 권한 축소</li>
        <li><strong>SEC03-BP05:</strong> 조직 수준 권한 가드레일 정의</li>
        <li><strong>SEC03-BP06:</strong> 생명주기 기반 접근 관리</li>
        <li><strong>SEC03-BP07:</strong> 퍼블릭 및 교차 계정 접근 분석</li>
        <li><strong>SEC03-BP08:</strong> 조직 내 안전한 리소스 공유</li>
        <li><strong>SEC03-BP09:</strong> 제3자와 안전한 리소스 공유</li>
      </ul>

      <PageNav />
    </article>
  );
}
