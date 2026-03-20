import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP05 — 조직 권한 가드레일 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 정책 잘못 구성으로 인한 의도치 않은 접근이 발생할 수 있습니다.</p>
      </div>
      <p>
        SCP를 사용하여 조직 전체의 권한 가드레일을 정의하고, 리소스 정책으로 주체 접근 조건과 허용 가능한 작업 범위를 지정하며, 워크로드 권한을 관리하는 주체에게 권한 경계를 설정합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>별도의 AWS 계정으로 명확한 환경 격리</li>
        <li>조직 권한 가드레일 정의에 SCP 활용</li>
        <li>조직 루트에서 계층 최상위 수준에 더 넓은 가드레일, 개별 계정 수준에 더 엄격한 가드레일 적용</li>
        <li>주체 접근 조건과 허용 가능한 작업 범위를 정의하는 리소스 정책</li>
        <li>워크로드 권한을 관리하는 주체에게 권한 경계 설정</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>SCP 없이 멤버 AWS 계정을 AWS Organizations에 생성하여 루트 자격 증명 제한 없음</li>
        <li>최대 권한에 가드레일 없이 최소 권한 정책 할당</li>
        <li>명시적 거부 기반 가드레일 없이 AWS IAM의 암묵적 거부 기반에만 의존</li>
        <li>VPC, 태그, 리소스 정책만으로 동일 계정 내 여러 워크로드 환경 운영</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>의도하지 않은 권한 부여가 불가능하다는 확신 구축</li>
        <li>최대 권한 범위 축소를 통한 권한 정의 및 관리 간소화</li>
        <li>정책 잘못 구성으로 인한 의도치 않은 접근 위험 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드/환경을 별도의 AWS 계정으로 격리합니다.</li>
        <li>SCP를 사용하여 멤버 계정의 최대 권한을 축소합니다(허용 목록 vs 거부 목록 전략 평가).</li>
        <li>IAM 리소스 정책으로 작업을 범위 지정하고 조건을 지정합니다. 역할 신뢰 정책의 조건도 활용합니다.</li>
        <li>워크로드 권한을 관리하는 역할에 IAM 권한 경계를 할당합니다.</li>
        <li>PAM(특권 접근 관리) 및 TEAM(임시 권한 상승 관리) 솔루션을 평가합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations — SCP, 조직 구성 단위(OU)</li>
        <li>AWS Control Tower — 제어, 랜딩 존</li>
        <li>AWS IAM — 리소스 정책, 권한 경계, 세션 정책</li>
        <li>AWS IAM Identity Center — 임시 권한 상승 접근</li>
        <li>데이터 경계(Data Perimeters) on AWS</li>
      </ul>
      <PageNav />
    </article>
  );
}
