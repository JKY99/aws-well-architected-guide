import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS03-BP01 — 경영진 후원 제공</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        운영 우선순위와 개선 활동에 경영진의 지원과 후원을 확보합니다.
        경영진의 후원 없이는 운영 개선에 필요한 자원 확보와 조직 문화 변화가 어렵습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        경영진이 운영 우수성의 중요성을 인식하고 지원합니다.
        운영 개선 활동에 필요한 예산, 인력, 시간이 경영진 지원을 통해 확보됩니다.
        운영팀이 비즈니스 결정에서 발언권을 가집니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기능 개발만 강조하고 운영 개선에는 자원을 배정하지 않는 경우</li>
        <li>운영 문제를 경영진에게 보고하는 채널이 없는 경우</li>
        <li>기술 부채와 운영 위험이 경영진에게 가시화되지 않는 경우</li>
        <li>운영 팀이 비즈니스 의사결정 과정에서 배제되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 개선에 필요한 자원 확보 용이</li>
        <li>비즈니스 목표와 운영 활동의 정렬</li>
        <li>기술 부채 해소를 위한 투자 확보</li>
        <li>운영팀의 사기 향상과 이직률 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>운영 지표(가용성, MTTR, 배포 빈도 등)를 경영진이 이해할 수 있는 비즈니스 지표로 변환하여 보고합니다.</li>
        <li>월간 또는 분기별 운영 검토 회의를 경영진과 함께 진행합니다.</li>
        <li>운영 위험과 기술 부채를 가시화하는 대시보드를 경영진에게 제공합니다.</li>
        <li>운영 개선 투자의 ROI를 비즈니스 언어로 제시합니다.</li>
        <li>주요 운영 사건 발생 시 경영진에게 신속하게 보고하는 채널을 수립합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch 대시보드 — 경영진용 운영 현황 시각화</li>
        <li>AWS Well-Architected Tool — 운영 위험 식별 및 경영진 보고</li>
        <li>AWS Business Support — 비즈니스 수준의 AWS 지원</li>
      </ul>

      <PageNav />
    </article>
  );
}
