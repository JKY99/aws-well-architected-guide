import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Page() {
  return (
    <article className="doc-content">
      <h1>SUS 4 — 데이터 관리 정책과 패턴을 어떻게 지속 가능성 목표에 활용합니까?</h1>

      <p>
        데이터 관리 정책과 패턴을 활용하여 지속 가능성 목표를 지원합니다.
        스토리지 프로비저닝을 최소화하고 리소스 사용을 최적화하며
        지능적인 데이터 수명 주기 관리를 통해 환경적 영향을 줄입니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp01">SUS04-BP01: 데이터 분류 정책 구현</Link></strong><br />
          <span>데이터를 분류하여 비즈니스 결과에 대한 중요도를 파악하고 가장 에너지 효율적인 스토리지 계층을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp02">SUS04-BP02: 데이터 액세스 및 스토리지 패턴을 지원하는 기술 사용</Link></strong><br />
          <span>데이터 액세스 및 저장 방식을 가장 잘 지원하는 스토리지 기술을 사용하여 워크로드를 지원하는 데 필요한 리소스를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp03">SUS04-BP03: 정책으로 데이터셋의 수명 주기 관리</Link></strong><br />
          <span>모든 데이터의 수명 주기를 관리하고 자동 삭제를 적용하여 워크로드에 필요한 총 스토리지를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp04">SUS04-BP04: 탄력성과 자동화로 블록 스토리지 또는 파일 시스템 확장</Link></strong><br />
          <span>탄력성과 자동화를 사용하여 데이터 증가에 따라 블록 스토리지 또는 파일 시스템을 확장함으로써 총 프로비저닝 스토리지를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp05">SUS04-BP05: 불필요하거나 중복된 데이터 제거</Link></strong><br />
          <span>불필요하거나 중복된 데이터를 제거하여 데이터셋을 저장하는 데 필요한 스토리지 리소스를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp06">SUS04-BP06: 공유 파일 시스템 또는 스토리지로 공통 데이터 접근</Link></strong><br />
          <span>공유 파일 시스템이나 스토리지를 도입하여 데이터 중복을 피하고 워크로드의 인프라 효율성을 높입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp07">SUS04-BP07: 네트워크를 통한 데이터 이동 최소화</Link></strong><br />
          <span>공유 파일 시스템이나 객체 스토리지를 사용하여 공통 데이터에 접근하고 워크로드의 데이터 이동에 필요한 총 네트워킹 리소스를 최소화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/sustainability/sus4/bp08">SUS04-BP08: 재생성하기 어려운 데이터만 백업</Link></strong><br />
          <span>비즈니스 가치가 없는 데이터의 백업을 피하여 워크로드의 스토리지 리소스 요구사항을 최소화합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
